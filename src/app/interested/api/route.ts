import { google, sheets_v4 } from "googleapis";
import { values } from "lodash";

function normalizeString(key: string) {
  return key.replace(/\\n/g, "\n");
}

async function _getGoolgeSheetClient() {
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    credentials: {
      type: process.env.NEXT_PUBLIC_GOOGLEAUTH_TYPE,
      project_id: process.env.NEXT_PUBLIC_GOOGLEAUTH_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_GOOGLEAUTH_PRIVATE_KEY_ID,
      private_key: normalizeString(
        process.env.NEXT_PUBLIC_GOOGLEAUTH_PRIVATE_KEY
      ),
      client_email: process.env.NEXT_PUBLIC_GOOGLEAUTH_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_GOOGLEAUTH_CLIENT_ID,
    },
  });
  return google.sheets({ version: "v4", auth });
}

async function _readGoogleSheet(
  googleSheetClient: sheets_v4.Sheets,
  sheetId: string,
  sheetName: string,
  range: string
) {
  const res = await googleSheetClient.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${sheetName}!${range}`,
  });

  return res.data.values;
}

async function _writeGoogleSheet(
  googleSheetClient: sheets_v4.Sheets,
  sheetId: string,
  sheetName: string,
  range: string,
  data: any
) {
  await googleSheetClient.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetName}!${range}`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      majorDimension: "ROWS",
      values: values(data),
    },
  });
}

export async function POST(req: Request) {
  const sheetId = process.env.NEXT_PUBLIC_SHEET_ID;
  const tabName = process.env.NEXT_PUBLIC_SHEET_NAME;
  const range = process.env.NEXT_PUBLIC_SHEET_RAGE;
  const data = await req.json();
  const reformData = [[data.name, data.age, data.phonenumber, new Date()]];
  const sheet = await _getGoolgeSheetClient();
  await _writeGoogleSheet(sheet, sheetId, tabName, range, reformData);
  return new Response("Success", { status: 200 });
}
