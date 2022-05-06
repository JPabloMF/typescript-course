(() => {
    function fullName( firstName: string, lastName: string = 'Default' ):string {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony');

    console.log({ name });
})();