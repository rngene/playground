'use client'

export function CustomLink() {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        window.location.href = e.currentTarget.href;
    };

    return <>
    <div>
       <a href="https://www.github.com" data-testid='customlink1'>Github link 1</a>
    </div>       
    <div>
       <a href="https://www.github.com" data-testid='customlink2' onClick={handleClick}>Github link 2</a>
    </div>       
    </>
}