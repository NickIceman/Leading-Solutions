exports.getResults = (req, res) => {
  const unknownUser = !(req.user);

  res.render('results', {
    title: 'Results',
    unknownUser,
  });
};
