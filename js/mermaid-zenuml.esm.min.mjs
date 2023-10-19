const n = "zenuml", e = (t) => /^\s*zenuml/.test(t), o = async () => {
  const { diagram: t } = await import("./zenuml-definition-074a43fa.js");
  return { id: n, diagram: t };
}, r = {
  id: n,
  detector: e,
  loader: o
};
export {
  r as zenuml
};
