function Post({ children }) {
    return (
        <div>
            <h2>Meu post</h2>
            {children}
            <button>Clique aqui</button>
        </div>
    )
}

export default Post