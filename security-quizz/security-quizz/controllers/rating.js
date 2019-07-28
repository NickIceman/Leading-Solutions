exports.getRating = (req, res) => {
  const unknownUser = !(req.user);

  res.render('Rating', {
    title: 'Rating',
    unknownUser,
  });
};
