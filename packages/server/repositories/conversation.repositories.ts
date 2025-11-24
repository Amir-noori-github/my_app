// implementation detail
const conversations = new Map<string, string>(); 

export const conversationRepository = {
    getLastResponseId(conversationId: string) {
    return conversations.get(conversationId);
},
    setLastResponseId(conversationId: string, responseId) {
     conversations.set(conversationId, responseId);
},

}; 
