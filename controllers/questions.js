const Question = require('../models/question');

// View a question and its options with a link to vote
module.exports.getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('options');
    const formattedQuestion = {
      id: question._id,
      title: question.title,
      options: question.options.map(option => ({
        id: option._id,
        text: option.text,
        votes: option.votes,
        link_to_vote: `https://polling-api-ten.vercel.app/options/${option._id}/add_vote`
      }))
    };
    res.json(formattedQuestion);
  } catch (error) {
    res.status(404).json({ message: 'Question not found' });
  }
};


module.exports.createQuestion = async (req, res) => {
  const question = new Question({
    title: req.body.title,
    options: req.body.options
  });
  console.log(req.params);
  try {
    await question.save();
    res.send(question);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.createOption = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    question.options.push({ text: req.body.text });
    await question.save();
    res.send(question);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question.options.some(option => option.votes > 0)) {
      return res.status(400).send({ error: 'Cannot delete question with options that have votes' });
    }
    await question.remove();
    res.send({ message: 'Question deleted' });
  } catch (err) {
    res.status(400).send(err);
  }
};

