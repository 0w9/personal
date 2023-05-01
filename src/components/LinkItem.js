function LinkItem({ text, url }) {
    return (
      <a href={url} className="text-blue-600 hover:text-blue-800 flex items-center">
        <span className="mr-2">{text}</span>
        <IconExternalLink size={18} />
      </a>
    );
  }
  
  export default LinkItem;
  