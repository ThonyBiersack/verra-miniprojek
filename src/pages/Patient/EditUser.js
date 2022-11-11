import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "../../redux/userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { nama, usia, jenis_kelamin, riwayat_penyakit } = existingUser[0];
  const [values, setValues] = useState({
    nama,
    usia,
    jenis_kelamin,
    riwayat_penyakit
  });

  const handleEditUser = () => {
    setValues({ id:'', nama: '', usia: '', jenis_kelamin:'', riwayat_penyakit:'' });
    dispatch(editUser({
      id: params.id,
      nama: values.nama,
      usia: values.usia,
      jenis_kelamin: values.jenis_kelamin,
      riwayat_penyakit: values.riwayat_penyakit
    }));
    navigate('/list-user');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.nama}
        onChange={(e) => setValues({ ...values, nama: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Verra' }}
      />
      <br />
      <TextField
        label="Usia"
        value={values.usia}
        onChange={(e) => setValues({ ...values, usia: e.target.value })}
        inputProps={{ type: 'number', placeholder: '21' }}
      />
       <br />
      <TextField
        label="Jenis Kelamin"
        value={values.jenis_kelamin}
        onChange={(e) => setValues({ ...values, jenis_kelamin: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Perempuan' }}
      />
       <br />
      <TextField
        label="Riwayat Penyakit"
        value={values.riwayat_penyakit}
        onChange={(e) => setValues({ ...values, riwayat_penyakit: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Asma' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser