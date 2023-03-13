JavaScript의 경우 Constructor 함수를 만들고 그안에 this를 이용하여 property를 선언하지만 TypeScript의 경우 그렇게 해줄 필요가 없습니다.

Parameter만 선언해주면 알아서 Constructor를 생성해줍니다.

```typescript
class Player {
    constructor(private firstName: string, private lastName: string) {}[label](README.md)
}

```

```javascript
class Player {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

> public, private 같은 접근 지시자는 javascript에 존재하지 않습니다.

# Abstract Class

다른 Class가 상속받을수 있는 Class입니다. 즉, Abstract Class를 사용해서는 직접 Instance를 생성할 수 없습니다.

```typescript
const wrongUser = new User();
```

## Abstract Method

Method를 구현해서는 안되고 Call Signature만 구현해야합니다.

> Abstract Class 및 Abstract Method javascript에 존재하지 않습니다!

즉, Abstact Class를 상속받은 Class는 Abstract Method를 꼭 구현해줘야합니다.

private vs protected vs public

> private, protected, public은 javascript에 존재하지 않습니다!

property에 대해 미리 알지 못하지만 Type만 알고있는 경우 사용하면 유용합니다.

Class를 Type 처럼 사용할 수 있습니다.
Parameter에 Class Type의 Instance를 사용하고 싶은 경우 Class Type을 사용하면 됩니다.
