# sh-fes.com

## install

```bash
yarn
```

## run

```bash
yarn start
```

### やる気を出すコマンド

初コミットからの変更履歴
```bash
git diff --shortstat 23a95e7fc047772e73e5272b0d14e84c812f0893 HEAD
```

初コミットからの変更文字数
```bash
git log -p --stat 23a95e7fc047772e73e5272b0d14e84c812f0893 HEAD > .local/git.log; wc -c .local/git.log
```