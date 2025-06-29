

export const dateFormat = (date) => {
    if (new Date(date).getTime() > 0 && !isNaN(new Date(date).getTime())) {
        return new Date(date).toLocaleDateString('Yangon', {
            day: 'numeric',
            month: 'long',
            year: "numeric",
            hour: 'numeric',
            minute: "numeric",
            second: 'numeric'
        })
    }
}