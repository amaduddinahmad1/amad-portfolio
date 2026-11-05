import type { ResultsTable as ResultsTableData } from "@/data/portfolio";

/** Scrolls sideways inside its own box on narrow screens, never the whole page. */
export default function ResultsTable({ table }: { table: ResultsTableData }) {
  return (
    <div
      role="region"
      aria-label={table.caption}
      tabIndex={0}
      className="overflow-x-auto rounded-2xl border border-border bg-surface"
    >
      <table className={`w-full text-left text-sm ${table.columns.length > 3 ? "min-w-[32rem]" : ""}`}>
        <caption className="px-5 pt-4 pb-2 text-left text-sm text-muted">{table.caption}</caption>
        <thead>
          <tr className="border-b border-border">
            {table.columns.map((column) => (
              <th key={column} scope="col" className="px-5 py-3 font-semibold text-fg">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr
              key={row.cells[0]}
              className={`border-b border-border last:border-b-0 ${row.highlight ? "bg-accent/10" : ""}`}
            >
              {row.cells.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="px-5 py-3 font-medium text-fg">
                    {cell}
                  </th>
                ) : (
                  <td
                    key={i}
                    className={`px-5 py-3 tabular-nums ${row.highlight ? "font-semibold text-fg" : "text-muted"}`}
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
