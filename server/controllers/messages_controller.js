let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).json(messages);
    },
    read: (req, res) => {
        res.status(200).json(messages);
    },
    update: (req, res) => {
        const {text} = req.body; 
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).json(messages);
    },
    delete: (req, res) => {
        for(let i = 0; i < messages.length; i++){
            if(messages[i].id == req.params.id){
                messages.splice(i, 1);

            }
        }
        res.status(200).json(messages);
    }
};