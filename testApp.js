const NLU_V1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

let nlp = new NLU_V1({
    'username': 'e102f18e-7997-468e-9b9a-a9ca61fdcc71',
    'password': '1U0SqFl2aGRy',
    'version_date': '2017-02-27',
    headers: {
        'X-Watson-Learning-Opt-Out': true
    }
});

let params = {
    'text': 'IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.',
    'features': {
        'entities': {               // not so good  ~ maybe
            'emotion' : true,
            'sentiment': true,
            'limit': 2
        },
        'keywords': {               // good
            'emotion': true,
            'sentiment': true,
            'limit': 2
        },
        'concepts': {},             // good
        'categories': {},           // good
        'relations': {},            // not good
        'semantic_roles': {},       // good
        'sentiment': {}             // maybe for mood
    },
    'language': 'en',
    'clean': false,
    'return_analyzed_text': true
};

nlp.analyze(params, (err, response) => {
    if (err) console.log('error: ' + err);

    else console.log(JSON.stringify(response, null, 2));
});
