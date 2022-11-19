# Testando o pytest
import pytest

from tables.tasks import Tasks

def test_priority_menor_que_três():
    tasks = Tasks("Tasks Study", 2)
    assert tasks.duration == 2


def test_duration_menor_que_um():
  with pytest.raises(ValueError):
   Tasks( "Tasks Study", 0)


def test_duration_maior_que_um():
  tasks = Tasks( "Tasks Study", 2)
  assert tasks.duration == 2












