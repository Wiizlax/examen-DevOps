const isValid = (gamerTag) => {
    const hasValidLength = gamerTag.length >= 8;
    const hasSpecialCharacter = /[&$!è§à_]/.test(gamerTag);
    const hasNumber = /\d/.test(gamerTag);
    return hasValidLength  && hasSpecialCharacter && hasNumber;
};

exports.isValid = isValid;
