const isValid = (gamerTag) => {
    const hasValidLength = gamerTag.length >= 8;
    
    return hasValidLength;
};

exports.isValid = isValid;
