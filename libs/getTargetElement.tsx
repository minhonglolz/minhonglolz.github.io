export default function getTargetElement (element: string) {
  if (typeof window === 'undefined') return
  return document.querySelector(element)
};
