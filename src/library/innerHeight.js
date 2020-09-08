const innerHeight = (percentage) => {
    const vh = window.innerHeight * 0.01;
    return vh * (percentage || 100);
}

export default innerHeight;