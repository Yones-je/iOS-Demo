import MenuItem from '../models/menuItem';

export const TACOS = [
  new MenuItem(
    't01',
    'tacos',
    'Pastor',
    'Marinerat fläskkött med ananas',
    24,
    'pig',
  ),
  new MenuItem('t02', 'tacos', 'Suadero', 'Långkokt högrev', 24, 'cow'),
  new MenuItem('t03', 'tacos', 'Bistec', 'Stekt nötkött', 24, 'cow'),
  new MenuItem('t04', 'tacos', 'Carnitas', 'Långkokt fläskkött', 24, 'pig'),
  new MenuItem('t05', 'tacos', 'Portobello', 'Med pastor marinad', 24, '(V)'),
];

export const TACOSGRANDES = [
  new MenuItem(
    'tg01',
    'tacosgrandes',
    'Alambre',
    'Strimlad kycklingfilé med lök, paprika och bacon',
    55,
    'pigchicken',
  ),
  new MenuItem(
    'tg02',
    'tacosgrandes',
    'Gringa',
    'Marinerat fläskkött med ananas',
    55,
    'pig',
  ),
  new MenuItem(
    'tg03',
    'tacosgrandes',
    'Campechana',
    'Marinerat fläsk- och nötkött med guacamole',
    55,
    'pig',
  ),
  new MenuItem(
    'tg04',
    'tacosgrandes',
    'Pirata',
    'Stekt nötkött med guacamole',
    55,
    'cow',
  ),
];

export const QUESADILLAS = [
  new MenuItem('q01', 'quesadillas', 'Queso', 'Smält ost', 25, '(V)'),
  new MenuItem('q02', 'quesadillas', 'Frijoles', 'Ost och bönor', 30, '(V)'),
  new MenuItem(
    'q03',
    'quesadillas',
    'Verduras',
    'Morötter, zucchini, lök & paprika',
    30,
    '(V)',
  ),
  new MenuItem('q04', 'quesadillas', 'Papa', 'Potatis, chili & lök', 30, '(V)'),
];

export const XTRA = [
  new MenuItem(
    'x01',
    'tillbehör',
    'Guacamole con Totopos',
    'Guacamole med majschips',
    50,
  ),
  new MenuItem(
    'x02',
    'tillbehör',
    'Frijoles con Totopos',
    'Bönor med majschips',
    45,
  ),
  new MenuItem('x03', 'tillbehör', 'Totopos', 'Majschips', 25),
];
