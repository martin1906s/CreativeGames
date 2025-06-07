export default function JuegoCanvas() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe 
                src="/Piano/index.html" 
                width="100%" 
                height="100%"
                frameBorder="0"
            />
        </div>
    );
}