const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Giacomo Cappellozza</p>
            </div>
        </footer>
    );
};

export default Footer;
