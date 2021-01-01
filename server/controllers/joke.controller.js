const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ Jokes: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findById(req.params.id) 
  .then(oneSingleJoke => res.json({oneSingleJoke }))
  .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneRandomJoke = (req, res) => {
  Joke.aggregate([{$sample: {size: 1}}])
		.then(oneRandomJoke => res.json({ Joke: oneRandomJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true })
    .then(updatedJoke => res.json( updatedJoke ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
