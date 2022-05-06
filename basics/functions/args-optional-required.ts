(() => {
    // Optional parameters should be placed at the end
    function fullName( firstName: string, lastName?: string ):string {
        return `${firstName} ${lastName || 'Stark'}`;
    }

    const name = fullName('Tony', 'Stark');

    console.log({ name });
})();