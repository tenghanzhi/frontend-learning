import React from "react";

const List = ({ data, sortBy, page }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Created At</td>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item["created_at"]}</td>
            </tr>
          )
        })}
        <tr>
          <td>Sort by: {sortBy}</td>
          <td>page: {page}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
