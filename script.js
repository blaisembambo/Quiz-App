let contentContainer = document.querySelector('.container');
let user = {};
let userCorrectAnswers = 0;

let questions = [
'question1',
'question2',
'question3'
];
let correctAnswers = [1,4,3];
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
let formWelcomePage = document.querySelector('form');
let formreturn = formWelcomePage.addEventListener("submit", function(event){
    let formElts = this.elements;
    let error = false
    for(let i = 0; i < formElts.length - 1; i++){
       if(formElts[i].value.trim().length == 0){
        formElts[i].parentElement.querySelector('span').style = "visibility:visible;";
        error = true;
       }else{
        formElts[i].parentElement.querySelector('span').style = "visibility:hidden;";
       }
    }

    if(error){
        event.preventDefault();
    }else{
        let fieldsValues = [];
        for(let i = 0; i < formElts.length - 1; i++){
            user[formElts[i].id] = formElts[i].value;
         }
        testFunc(questions,answersToQuest,correctAnswers,this) 
      /*  displaySucceedingTest(this,user); */
    }
    
});
/******************************user signing up ends here************************ */


/******************************test page starts here************************ */
window.testPageDesign = function(question,answers,iteration){

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
    let questionNumber = iteration + 1;
    questionTrack.innerHTML = questionNumber + '/' + numberOfQuestions;
    progressBarCaption.appendChild(questionTrack);
    let timeDisplay = document.createElement('span');
    timeDisplay.setAttribute('class','time_display');
    timeDisplay.innerHTML = "30";
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

    let answer1Label = document.createElement('label');
    answer1Label.setAttribute('class','answer answer1');
    answer1Label.setAttribute('for','answer1');
    let answer1Radio = document.createElement('input');
    answer1Radio.setAttribute('type','radio');
    answer1Radio.setAttribute('value','0');
    answer1Radio.setAttribute('name','answer');
    answer1Radio.setAttribute('id','answer1');
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
    buttonsWrapper.appendChild(btnQuit);
    
    let btnNext = document.createElement('input');
    btnNext.setAttribute('type','submit');
    btnNext.setAttribute('value','Suivant');
    btnNext.setAttribute('class','btn btn_next');
    buttonsWrapper.appendChild(btnNext);

    questionsPageForm.appendChild(buttonsWrapper);

    questionsPageContainer.appendChild(questionsPageForm);

    return questionsPageContainer;

}
window.testFunc = function(quest,ans,correctAns,invoquingElt){
    invoquingElt.parentElement.remove();
    document.querySelector('body').appendChild(testPageDesign(quest[0],ans[0],0));
/*     for(let i = 0; i < quest.length; i++){
        testPageDesign(quest[i],ans[i],i);
    } */
}


/******************************test page ends here************************ */

/******************************display succeeding test starts here************************ */
window.displaySucceedingTest = function(invoquingElt,user,score){
    alert('from displayfunc');
    alert(user.name + " " + user.email);
    invoquingElt.parentElement.remove();
    let succeededTestPageContainer = document.createElement('div');
    succeededTestPageContainer.setAttribute('class','container succeeded_test_page');
    succeededTestPageContainer.innerHTML = 'hello world';
    succeededTestPageContainer.style.display = 'block';
    document.querySelector('body').appendChild(succeededTestPageContainer);
    alert(succeededTestPageContainer.parentElement);
}
/******************************display succeeding test ends here************************ */

/******************************display failing test starts here************************ */
function displaySucceedingTest(user,correctAnswers){

}
/******************************display failing test ends here************************ */



