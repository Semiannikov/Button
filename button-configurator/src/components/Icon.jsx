// src/components/Icon.jsx
import React from 'react';

// Импорт всех SVG файлов из папки и создание объекта с иконками
const importAll = (requireContext) => {
  let icons = {};
  requireContext.keys().forEach((item) => {
    icons[item.replace('./', '').replace('.svg', '')] = requireContext(item).default;
  });
  return icons;
};

// Используем require.context для импорта всех иконок
const icons = importAll(require.context('../assets/icons', false, /\.svg$/));

const Icon = ({ name, ...props }) => {
  const SvgIcon = icons[name];
  return SvgIcon ? <SvgIcon {...props} /> : null;
};

export default Icon;
