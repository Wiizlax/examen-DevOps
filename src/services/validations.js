const isValid = (gamerTag) => {
    const hasValidLength = gamerTag.length >= 8;
    const hasSpecialCharacter = /[&$!è§à_]/.test(gamerTag);

    return hasValidLength  && hasSpecialCharacter;
};

exports.isValid = isValid;
