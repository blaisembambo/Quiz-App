let questions = [
    'Dans quel élément HTML place-t-on le code JavaScript ?',
    'Quelle est la syntaxe JavaScript correcte pour modifier le contenu de l\'élément HTML ci-dessous ?<br>&lt;p id="demo"&gt;Ceci est une démonstration.&lt;/p&gt;',
    'Quel est le bon endroit pour insérer le code JavaScript ?',
    'Quelle est la syntaxe correcte pour faire référence à un script externe appelé "xxx.js" ?',
    'Le fichier JavaScript externe doit contenir la balise :',
    'Comment écrire "Bonjour le monde" dans une fenêtre d\'alerte ?',
    'Comment créer une fonction en JavaScript ?',
    'Comment appelle-t-on une fonction nommée "maFonction" ?',
    'Comment écrire une instruction IF en JavaScript ?',
    'Comment écrire une instruction IF pour exécuter du code si "i" n\'est PAS égal à 5 ?',
    'Comment commencer une boucle WHILE ?',
    'comment déclarer ou commencer une boucle for',
    'comment ajouter un commentaire en javascript',
    'comment insérer un commentaire comportant plus d\'une ligne',
    'Quelle est la manière correcte d\'écrire un tableau en javascript ?'
    ];
    let correctAnswers = [
    '&lt;script&gt;',
    'document.getElementById("demo").innerHTML = "Bonjour le monde !";',
    'La section &lt;head&gt; et la section &lt;body&gt; sont correctes',
    '&lt;script src="xxx.js"&gt;',
    'Aucune balise n\'est exigée',
    'alert("Bonjour le monde");',
    'function maFonction(){}',
    'maFonction()',
    'if(i == 5)',
    'if(i != 5)',
    'while(i &lt;= 10)',
    'for(i = 0; i &lt;= 5; i++)',
    '//ceci est un commentaire',
    '/*ce commentaire comporte<br>plus d\'une ligne*/',
    'let couleurs = ["rouge", "vert", "bleu"]'
    ];
    let answersToQuest = [
        [
            '&lt;js&gt;',
            '&lt;script&gt;',
            '&lt;javascript&gt;',
            '&lt;javaScript&gt;'
        ],
        [
            'document.getElement("p").innerHTML = "Bonjour le monde !" ;',
            'document.getElementById("demo").innerHTML = "Bonjour le monde !";',
            'document.getElementByName("p").innerHTML = "Bonjour le monde!";',
            '#demo.innerHTML = "Bonjour le monde !" ;'
        ],
        [
            'La section &lt;body&gt;',
            'La section &lt;head&gt; et la section &lt;body&gt; sont correctes',
            'La section &lt;head&gt;',
            'la balise &lt;title&gt;'
        ],
        [
            '&lt;script href="xxx.js"&gt;',
            '&lt;nom du script="xxx.js"&gt;',
            '&lt;script src="xxx.js"&gt;',
            '&lt;ref du script="xxx.js"&gt;'
        ],
        [
            '&lt;script&gt;.',
            '&lt;javascript&gt;.',
            '&lt;javaScript&gt;.',
            'Aucune balise n\'est exigée'
        ],
        [
            'alert("Bonjour le monde");',
            'msgBox("Bonjour le monde");',
            'msg("Bonjour le monde");',
            'alertBox("Bonjour le monde");'
        ],
        [
            'function : maFonction(){}',
            'function maFonction(){}',
            'function = maFonction(){}',
            'function == maFonction(){}'
        ],
        [
            'call maFonction()',
            'call function maFonction()',
            'maFonction()',
            'invok maFonction()'
        ],
        [
            'if i = 5',
            'if i = 5 then',
            'if i 5',
            'if(i == 5)'
        ],
        [
            'if(i != 5)',
            'if i &lt&gt; 5',
            'if i =! 5 then',
            'if(i &lt&gt; 5)'
        ],
        [
            'while i = 1 to 10',
            'while(i <= 10)',
            'while(i <= 10; i++)',
            'while i : 1 to 10'
        ],
        [
            'for(i = 0; i <= 5)',
            'for i = 1 to 5',
            'for(i = 0; i <= 5; i++)',
            'for(i <= 5; i++)'
        ],
        [
            'ceci est un commentaire',
            '&lt;!--ceci est un commentaire--&gt',
            '--ceci est un commentaire---',
            '//ceci est un commentaire'
        ],
        [
            '/*ce commentaire comporte<br>plus d\'une ligne*/',
            '//ce commentaire comporte<br>plus d\'une ligne//',
            '&lt;!--ce commentaire comporte<br>plus d\'une ligne-- &gt',
            '--ce commentaire comporte<br>plus d\'une ligne--'
        ],
        [
            'let couleurs = "rouge", "vert", "bleu"',
            'let couleurs = ["rouge", "vert", "bleu"]',
            'let couleurs = 1 =("rouge"), 2 = ("vert"), 3 = ("bleu")',
            'let couleurs = (1:"rouge", 2:"vert", 3:"bleu")'
        ]
    ];
