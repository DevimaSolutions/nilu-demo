export const getUserInitials = (fullName: string) =>
  fullName.split(/\s/).reduce((acc, word) => {
    if (!word.length || acc.length > 1) {
      return acc;
    }
    return acc + word[0].toUpperCase();
  }, '');
