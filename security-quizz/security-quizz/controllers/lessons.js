exports.getLessons = (req, res) => {
  const unknownUser = !(req.user);

  res.render('Lessons', {
    title: 'Lessons',
    unknownUser,
  });
};
