import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';

const theme = import ('monaco-themes/themes/Tomorrow.json');

theme.then(data => {
  editor.defineTheme('tomorrow', data as any);
  editor.setTheme('tomorrow');
});

export interface SQLEditorProps {
  sql?: string;
  defaultSql?: string;
  onSqlChange?: (sql: string) => void;
}

export default function SQLEditor ({ sql, defaultSql, onSqlChange }: SQLEditorProps) {
  return (
    <Editor
      className="h-full w-full"
      theme='tommorrow'
      value={sql}
      defaultLanguage="mysql"
      defaultValue={defaultSql}
      onChange={onSqlChange}
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
  );
}

// See https://xie.infoq.cn/article/05760cba69cfff966272eca5b
// TODO: auto completion
//
// languages.registerCompletionItemProvider('mysql', {
//
// })
