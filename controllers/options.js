const Question = require('../models/question');

module.exports.deleteOption = async (req, res) => {
    try {
      const question = await Question.findOne({ 'options._id': req.params.id });
      const option = question.options.id(req.params.id);
      if (option.votes > 0) {
        return res.status(400).send({ error: 'Cannot delete option with votes' });
      }
      option.remove();
      await question.save();
      res.send({ message: 'Option deleted' });
    } catch (err) {
      res.status(400).send(err);
    }
  };
  
  module.exports.addVote = async (req, res) => {
    try {
      const question = await Question.findOne({ 'options._id': req.params.id });
      const option = question.options.id(req.params.id);
      option.votes++;
      await question.save();
      res.send({ message: 'Vote added' });
    } catch (err) {
      res.status(400).send(err);
    }
  }
  