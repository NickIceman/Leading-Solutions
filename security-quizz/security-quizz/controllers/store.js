exports.getStore = (req, res) => {
  const unknownUser = !(req.user);

  res.render('Store', {
    title: 'Store',
    unknownUser,
  });
};
