export function Link({href, children, ...props}) {
    
    const handleClick = (e) => {
        e.preventDefault();

        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
    
    }
    
    return (
        <a href={href}  {...props} onClick={handleClick}>
            {children}
        </a>
    )
}