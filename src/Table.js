import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import * as opportunities from "./opportunities.json";
import { getTierStars, makePercentage } from "./helpers/helpers";

export default function BasicTable({ setSelectedRow }) {
  const data = opportunities.default;

  function handleRowClick(e, row) {
    setSelectedRow(row);
  }

  return (
    <div id="tableWrapper">
      <TableContainer
        sx={{ maxWidth: 1500, width: "auto", mx: "auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{ background: "#fefefe", border: "1px solid #fefefe" }}
          >
            <TableRow sx={{ th: { fontWeight: 700 } }}>
              <TableCell align="left">Opp Name</TableCell>
              <TableCell align="left">Opp Stage</TableCell>
              <TableCell align="right">Rep Probability</TableCell>
              <TableCell align="right">PX Probability</TableCell>
              <TableCell align="left">PX Tier</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Sales Rep</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0
                  },
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.3
                  },
                  transition: "all .15s"
                }}
              >
                <TableCell component="th" scope="row">
                  {row.oppName}
                </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">
                  {makePercentage(row.repProbability)}
                </TableCell>
                <TableCell align="right">
                  {makePercentage(row.pilytixProbability)}
                </TableCell>
                <TableCell align="left">
                  {getTierStars(row.pilytixTier[0])}
                </TableCell>
                <TableCell align="right">
                  {row.amount.toLocaleString()}
                </TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
