import type TableTypes from "./Table.types";

const Table = ({ children, className }: TableTypes) => {
  return (
    <table className={className}>
      {children}
    </table>
  );
};

Table.Header = ({ children }: TableTypes) => {
  return <thead>{children}</thead>;
};

Table.Body = ({ children }: TableTypes) => {
  return <tbody>{children}</tbody>;
};

Table.Row = ({ children }: TableTypes) => {
  return <tr>{children}</tr>;
};

Table.Cell = ({ children }: TableTypes) => {
  return <td>{children}</td>;
};

export default Table;