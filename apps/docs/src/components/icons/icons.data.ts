import iconNodes from '#/data/iconNodes';

export const iconData = {
 load: async () => {
    return {
      icons: Object.entries(iconNodes).map(([name, iconNode]) => ({ name, iconNode })),
    };
  },
};
