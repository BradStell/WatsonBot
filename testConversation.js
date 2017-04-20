var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
    username: 'ff71802a-62b2-47ae-9692-df5e71c142b9',
    password: 'fRohP03kApiD',
    version_date: ConversationV1.VERSION_DATE_2017_02_03
});

conversation.message({
        input: { text: '' },
        workspace_id: '267b330b-e345-4e6d-9eb8-1962deba1999'
    }, function(err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log(JSON.stringify(response, null, 2));
            console.log('=====================\n\n');
            conversation.message({
                input: { text: 'Yo' },
                workspace_id: '267b330b-e345-4e6d-9eb8-1962deba1999',
                context: response.context
            }, (err, res) => {
                if (err) console.error(err);
                else
                    console.log(JSON.stringify(res, null, 2));
            });
        }
});