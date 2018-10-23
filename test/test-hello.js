/* global describe, it, expect, beforeEach */
var b = require('../b');

var p = require('../p')

var to = require('../to')

var clock

describe('hello', function () {
  beforeEach(()=>{
    clock = sinon.useFakeTimers()
  })

  afterEach(() => {
    sinon.restore();
  });

  it('with mock', function () {
    var b1mock = sinon.mock(b, 'b1');
    b1mock.expects("b1").returns(1000);
    expect(b.b1(2)).to.be(1000)
  })

  it('with fake', function () {
    var fake = sinon.fake.returns(2000)
    sinon.replace(b, 'b1', fake);
    expect(b.b1(3)).to.be(2000)
    expect(fake.called).to.be(true)
    expect(fake.getCall(0).args[0]).to.be(3)
  })

  it('with stub', function () {
    var stub = sinon.stub();
    stub.returns(3000)
    sinon.replace(b, 'b1', stub);
    expect(b.b1(3)).to.be(3000)
  })

  it('with stub2', function () {
    to.interval()
    clock.tick(1000)
    clock.tick(1000)
    clock.tick(500)
    expect(to.get()).to.be(6)
  })
})
