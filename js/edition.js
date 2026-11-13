// George: Metal Magician — fabrication and welding, Grenada. Quotations for
// bids, sections for materials and labour, costs and markup, jobs and
// purchases, EC dollars, the calendar tax year.
export const EDITION = {
  id: "metal-magician",
  name: "Metal Magician",
  db: "metal-magician",
  laptop: false,
  settings: {
    heading: "",
    business: { name: "George: Metal Magician" },
    estimate_numbering: { prefix: "QUO-", next: 1, digits: 4 },
    defaults: { currency: "XCD", terms_days: 30, valid_days: 30, tax_rate: "0", tax_label: "VAT" },
    estimate_word: "Quotation",
    use_sections: true,
    use_costs: true,
    markup: "20",
    use_jobs: true,
    year_start: "01-01",
    style: "circles",
    thanks: "THANK YOU",
    note: "Thank you for your business.",
  },
};
