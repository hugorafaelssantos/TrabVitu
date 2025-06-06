const HighlightedText = ({ children }) => {
  return (
    <span
      style={{
        color: 'purple',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 0, 242, 0.2)',
        padding: '2px 4px',
        borderRadius: '4px',
      }}
    >
      {children}
    </span>
  );
};

export default HighlightedText;
