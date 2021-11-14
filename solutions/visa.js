const checkVisa = (cardNumber) => {
    const visa = /^4\d{12}(?:\d{3})?$/;
    return visa.test(cardNumber);
}

export default checkVisa;