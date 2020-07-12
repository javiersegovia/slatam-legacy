const utcDate = new Date(Date.now())

module.exports = {
  UserVerification: [
    {
      passwordResetToken: '454554dffCfggffd',
      passwordResetTokenExpiryDate: utcDate,
      isVerifiedEmail: true,
      verifiedEmailToken: null,
      verifiedEmailTokenExpiryDate: null,
      belongsTo: { where: { id: 1 } },
    },
  ],
}
