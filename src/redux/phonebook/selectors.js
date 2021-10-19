export const getFilter = (state) => state.filtre.filter;

export const getVisibleContacts = (data, keyWord) => {
  const normalizedFilter = keyWord.toLowerCase();

  if (!data) {
    return;
  }

  return data.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
