export const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(email);
};
