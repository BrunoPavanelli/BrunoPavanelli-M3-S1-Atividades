function PostContent ({ text, children }) {
    return (
        <div>
            {children}
            <p>{ text }</p>
        </div>
    )
}

export default PostContent