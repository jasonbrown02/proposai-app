// lib/airtable.ts

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = "app44hxN4ecbNvgRm";
const RFP_TABLE = "RFPs";
const QUESTIONS_TABLE = "Questions";

const baseUrl = `https://api.airtable.com/v0/${BASE_ID}`;
const headers = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  "Content-Type": "application/json",
};

export async function getRFPs() {
  const res = await fetch(`${baseUrl}/${RFP_TABLE}`, { headers });
  const data = await res.json();
  return data.records;
}

export async function getQuestionsForRFP(rfpId: string) {
  const res = await fetch(
    `${baseUrl}/${QUESTIONS_TABLE}?filterByFormula=SEARCH('${rfpId}', ARRAYJOIN({RFPs}))`,
    { headers }
  );
  const data = await res.json();
  return data.records;
}

export async function updateDraftAnswer(questionId: string, draftAnswer: string) {
  const res = await fetch(`${baseUrl}/${QUESTIONS_TABLE}/${questionId}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      fields: {
        "Draft Answer": draftAnswer,
      },
    }),   
  });
  return res.ok;
}
 