let contentContainer = document.querySelector('.container');
let user = {};
let userCorrectAnswers = 0;
let questionNumber = 0;

let questions = [
'question1',
'question2',
'question3'
];
let correctAnswers = [0,1,3];
let answersToQuest = [
    [
        'answer option 1 to question 1',
        'answer option 2 to question 1',
        'answer option 3 to question 1',
        'answer option 4 to question 1'
    ],
    [
        'answer option 1 to question 2',
        'answer option 2 to question 2',
        'answer option 3 to question 2',
        'answer option 4 to question 2'
    ],
    [
        'answer option 1 to question 3',
        'answer option 2 to question 3',
        'answer option 3 to question 3',
        'answer option 4 to question 3'
    ],
];

let numberOfQuestions = questions.length;

/******************************user signing up starts here************************ */
let formWelcomePage = document.querySelector('.welcome_page_form');
formWelcomePage.addEventListener("submit", function(event){
    event.preventDefault();
    let formElts = this.elements;
    let error = false
    for(let i = 0; i < formElts.length - 1; i++){
       if(formElts[i].value.trim().length == 0){
        formElts[i].parentElement.querySelector('span').style = "visibility:visible;";
        formElts[i].style = 'border-color:#FF3838';
        error = true;
       }else{
        formElts[i].parentElement.querySelector('span').style = "visibility:hidden;";
        formElts[i].style = 'border-color:#DDDDDD';
       }
    }

    if(error){
        event.preventDefault();
    }else{
        let fieldsValues = [];
        for(let i = 0; i < formElts.length - 1; i++){
            user[formElts[i].id] = formElts[i].value;
         }
         answerSubmissionFunc(questions,answersToQuest,correctAnswers,this.parentElement);
    } 
});
/******************************user signing up ends here************************ */

/******************************test page starts here************************ */
let i;
window.answerSubmissionFunc = function(quest,ans,correctAns,eltToRemove){
    i = questionNumber;

    if (questionNumber < questions.length){
        eltToRemove.remove();
        document.querySelector('body').appendChild(testPageDesign(quest[i],ans[i],i));
        progressBarAndTimingManagementFunc();
        questionNumber++;
    }else{
        eltToRemove.remove();
        document.querySelector('body').appendChild(userOutputPage(user,userCorrectAnswers,questions));
    } 
}

/******progressbar, timing on question management starts here******** */
let setIntervalForQuestionTime;
let clearIntervalForQuestionTime;
let setIntervalForTimeDisplay;
let clearIntervalForTimeDisplay;
window.progressBarAndTimingManagementFunc = function(){
    let timeCounter = 60;
    let progresssEvolution = document.querySelector('.progress_evolution');
    let progresssEvolutionStyles = getComputedStyle(progresssEvolution, null);
    let progresssEvolutionWidth = parseInt(progresssEvolutionStyles.getPropertyValue("width"));
    let progressEvolutionWidthToSubstract = progresssEvolutionWidth/6000;
    let milisecondCounter = 100;

    clearIntervalForTimeDisplay = function(){
        clearInterval(setIntervalForTimeDisplay);
    }

    setIntervalForTimeDisplay = setInterval(function(){
        progresssEvolutionWidth -= progressEvolutionWidthToSubstract;
        progresssEvolution.style = "width : " + progresssEvolutionWidth + "px";
        milisecondCounter--;
        if(milisecondCounter === 0){
            timeCounter--;
            document.querySelector('.time_display').innerHTML = timeCounter;
            milisecondCounter = 100;
        } 
        if(timeCounter === 0){
            clearIntervalForTimeDisplay();
            
            let userAnswer;
            let radioInputs = document.querySelector('form').querySelectorAll('input[type = radio]');
           
            for(let i = 0; i < radioInputs.length; i++){
                if(radioInputs[i].checked){
                    userAnswer = i;
                } 
            }
            if(correctAnswers[questionNumber - 1] === userAnswer) userCorrectAnswers++;    

            contentContainer = document.querySelector('div');
            answerSubmissionFunc(questions,answersToQuest,correctAnswers,contentContainer);
        }
        },10);
}
/******progressbar, timing on question management ends here******** */

/*****************test quesions page starts here**************** */
window.testPageDesign = function(question,answers,iteration){

    function radioBtnsEventFunc(e){
        let questionsPgFrm = document.querySelector('.questions_page_container');
        let labels = questionsPgFrm.querySelectorAll('label');
        let customRadioBtns = questionsPgFrm.querySelectorAll('.custom_radio_btn');
        let btnNext = document.querySelector('.btn_next');
        if(e.target.checked){
            btnNext.disabled = false;
            btnNext.style = 'opacity: 1';
            for(let i = 0; i < customRadioBtns.length; i++){
                if(customRadioBtns[i] === e.target.parentElement.querySelector('.custom_radio_btn')){
                    customRadioBtns[i].style = 'background: #028A3D; border-color: #028A3D';
                    labels[i].style = 'border-color: #028A3D';
                } else{
                    customRadioBtns[i].style = 'background: #FFFFFF; border-color: #DDDDDD';
                    labels[i].style = 'border-color: #DDDDDD';
                }
            }
        }
    }
    let questionsPageContainer = document.createElement('div');
    questionsPageContainer.setAttribute('class','container questions_page_container');
    
    let questionParagraph = document.createElement('p');
    questionParagraph.setAttribute('class','question');
    questionParagraph.innerHTML = question;
    questionsPageContainer.appendChild(questionParagraph);

    let progressBarTool = document.createElement('div');
    progressBarTool.setAttribute('class','progress_bar_tool');
    
    let progressBarCaption = document.createElement('div');
    progressBarCaption.setAttribute('class','progress_bar_caption');
    let questionInCaption = document.createElement('span');
    questionInCaption.innerHTML = 'Question ';
    progressBarCaption.appendChild(questionInCaption);
    let questionTrack = document.createElement('span');
    questionTrack.setAttribute('class','question_track');
    let questNumber = iteration + 1;
    questionTrack.innerHTML = questNumber + '/' + numberOfQuestions;
    progressBarCaption.appendChild(questionTrack);
    let timeDisplay = document.createElement('span');
    timeDisplay.setAttribute('class','time_display');
    timeDisplay.innerHTML = "60";
    progressBarCaption.appendChild(timeDisplay);

    progressBarTool.appendChild(progressBarCaption);

    let progressBar = document.createElement('div');
    progressBar.setAttribute('class','progress_bar');
    let progressEvolution = document.createElement('div');
    progressEvolution.setAttribute('class','progress_evolution');
    progressBar.appendChild(progressEvolution);

    progressBarTool.appendChild(progressBar);

    questionsPageContainer.appendChild(progressBarTool);

    let questionsPageForm = document.createElement('form');
    questionsPageForm.setAttribute('class','questions_page_form');
    questionsPageForm.addEventListener('submit',function(event){
        event.preventDefault();
        clearIntervalForTimeDisplay();

        let userAnswer;
        let radioInputs = this.querySelectorAll('input[type = radio]');
        for(let i = 0; i < radioInputs.length; i++){
            if(radioInputs[i].checked){
                userAnswer = i;
            } 
        }
        
        if(correctAnswers[questionNumber - 1] === userAnswer) userCorrectAnswers++;

        contentContainer = document.querySelector('div');
        answerSubmissionFunc(questions,answersToQuest,correctAnswers,contentContainer);
    }); 

    let answer1Label = document.createElement('label');
    answer1Label.setAttribute('class','answer answer1');
    answer1Label.setAttribute('for','answer1');
    let answer1Radio = document.createElement('input');
    answer1Radio.setAttribute('type','radio');
    answer1Radio.setAttribute('value','0');
    answer1Radio.setAttribute('name','answer');
    answer1Radio.setAttribute('id','answer1');
    answer1Radio.addEventListener('change',radioBtnsEventFunc);
    answer1Label.appendChild(answer1Radio);
    let customRadioBtn1 = document.createElement('div');
    customRadioBtn1.setAttribute('class','custom_radio_btn custom_radio_btn1');
    answer1Label.appendChild(customRadioBtn1);
    let answer1Text = document.createElement('span');
    answer1Text.setAttribute('class','answer_text answer1_text');
    answer1Text.innerHTML = answers[0];
    answer1Label.appendChild(answer1Text);

    questionsPageForm.appendChild(answer1Label);

    let answer2Label = document.createElement('label');
    answer2Label.setAttribute('class','answer answer2');
    answer2Label.setAttribute('for','answer2');
    let answer2Radio = document.createElement('input');
    answer2Radio.setAttribute('type','radio');
    answer2Radio.setAttribute('value','1');
    answer2Radio.setAttribute('name','answer');
    answer2Radio.setAttribute('id','answer2');
    answer2Radio.addEventListener('change',radioBtnsEventFunc);
    answer2Label.appendChild(answer2Radio);
    let customRadioBtn2 = document.createElement('div');
    customRadioBtn2.setAttribute('class','custom_radio_btn custom_radio_btn2');
    answer2Label.appendChild(customRadioBtn2);
    let answer2Text = document.createElement('span');
    answer2Text.setAttribute('class','answer_text answer2_text');
    answer2Text.innerHTML = answers[1];
    answer2Label.appendChild(answer2Text);

    questionsPageForm.appendChild(answer2Label);

    let answer3Label = document.createElement('label');
    answer3Label.setAttribute('class','answer answer3');
    answer3Label.setAttribute('for','answer3');
    let answer3Radio = document.createElement('input');
    answer3Radio.setAttribute('type','radio');
    answer3Radio.setAttribute('value','2');
    answer3Radio.setAttribute('name','answer');
    answer3Radio.setAttribute('id','answer3');
    answer3Radio.addEventListener('change',radioBtnsEventFunc);
    answer3Label.appendChild(answer3Radio);
    let customRadioBtn3 = document.createElement('div');
    customRadioBtn3.setAttribute('class','custom_radio_btn custom_radio_btn3');
    answer3Label.appendChild(customRadioBtn3);
    let answer3Text = document.createElement('span');
    answer3Text.setAttribute('class','answer_text answer3_text');
    answer3Text.innerHTML = answers[2];
    answer3Label.appendChild(answer3Text);

    questionsPageForm.appendChild(answer3Label);

    let answer4Label = document.createElement('label');
    answer4Label.setAttribute('class','answer answer4');
    answer4Label.setAttribute('for','answer4');
    let answer4Radio = document.createElement('input');
    answer4Radio.setAttribute('type','radio');
    answer4Radio.setAttribute('value','3');
    answer4Radio.setAttribute('name','answer');
    answer4Radio.setAttribute('id','answer4');
    answer4Radio.addEventListener('change',radioBtnsEventFunc);
    answer4Label.appendChild(answer4Radio);
    let customRadioBtn4 = document.createElement('div');
    customRadioBtn4.setAttribute('class','custom_radio_btn custom_radio_btn4');
    answer4Label.appendChild(customRadioBtn4);
    let answer4Text = document.createElement('span');
    answer4Text.setAttribute('class','answer_text answer4_text');
    answer4Text.innerHTML = answers[3];
    answer4Label.appendChild(answer4Text);

    questionsPageForm.appendChild(answer4Label);

    let buttonsWrapper = document.createElement('div');
    buttonsWrapper.setAttribute('class','buttons_wrapper');

    let btnQuit = document.createElement('button');
    btnQuit.setAttribute('class','btn btn_quit');
    btnQuit.innerHTML = 'Quitter';
    btnQuit.addEventListener('click',function(event){
        document.querySelector('div').remove();
        document.querySelector('body').appendChild(userOutputPage(user,userCorrectAnswers,questions));
    });
    buttonsWrapper.appendChild(btnQuit);
    
    let btnNext = document.createElement('input');
    btnNext.setAttribute('type','submit');
    btnNext.setAttribute('value','Suivant');
    btnNext.setAttribute('class','btn btn_next');
    btnNext.setAttribute('disabled','true');
    buttonsWrapper.appendChild(btnNext);

    questionsPageForm.appendChild(buttonsWrapper);

    questionsPageContainer.appendChild(questionsPageForm);

    return questionsPageContainer;
}
/******************************test page ends here************************ */

/*******************************user output page starts here************** */
window.userOutputPage = function(user,correctAnsws,quests){
    let userOutputConatiner = document.createElement('div');
    let userOutputConatinerClasses = (correctAnsws < (quests.length) / 2) ? "container failure_test_page" : "container succeeded_test_page";
    userOutputConatiner.setAttribute('class', userOutputConatinerClasses);

    let contentContainer = document.createElement('div');
    contentContainer.setAttribute('class','content_container');

    let userName = document.createElement('h2');
    userName.setAttribute('class','name');
    userName.innerHTML = user.name;
    contentContainer.appendChild(userName);

    let userEmail = document.createElement('p');
    userEmail.setAttribute('class','email');
    userEmail.innerHTML = user.email;
    contentContainer.appendChild(userEmail);

    let outputIcon = document.createElement('div');
    let outputIconClass = (correctAnsws < (quests.length) / 2) ? "failure_icon" : "success_icon";
    outputIcon.setAttribute('class', outputIconClass);
    contentContainer.appendChild(outputIcon);

    let quizSuccess = document.createElement('p');
    quizSuccess.setAttribute('class','quiz_success');
    let quizResultText = (correctAnsws < 10 ? '0' + correctAnsws : correctAnsws) + '/' + quests.length;
    quizSuccess.innerHTML = quizResultText;
    contentContainer.appendChild(quizSuccess);

    let outputForm = document.createElement('form');
    outputForm.addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('div').remove();
        document.querySelector('body').appendChild(contentContainer);
    });
    
    let homeButton = document.createElement('input');
    homeButton.setAttribute('type','submit');
    homeButton.setAttribute('value','Accueil');
    homeButton.setAttribute('class','btn btn_home');
    outputForm.appendChild(homeButton);
    contentContainer.appendChild(outputForm);

    userOutputConatiner.appendChild(contentContainer);

    return userOutputConatiner;
}
/*******************************user output page ends here************** */



