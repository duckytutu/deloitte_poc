export default interface ITableColumn {
  id: string;
  label: string;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  minWidth?: number;
}
