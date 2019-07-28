exports.getProject = (req, res) => {
  const unknownUser = !(req.user);

  res.render('project', {
    title: 'Project',
    unknownUser,
  });
};
