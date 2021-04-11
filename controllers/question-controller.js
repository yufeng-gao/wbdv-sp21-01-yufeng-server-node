const questionService
    = require("../services/questions-service")
module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        questionService.findQuestionsForQuiz(quizId)
        .then ((questions) => {
            res.send(questions)
        })
    }
    app.get("/api/quizzes/:qid/questions",
        findQuestionsForQuiz)
}